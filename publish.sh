#!/usr/bin/env bash
#
# publish.sh — build and publish squanlib to npm (which also feeds the
# jsDelivr / unpkg CDNs automatically a few minutes later).
#
# Usage:
#   ./publish.sh patch     # 1.0.0 -> 1.0.1   (default)
#   ./publish.sh minor     # 1.0.0 -> 1.1.0
#   ./publish.sh major     # 1.0.0 -> 2.0.0
#   ./publish.sh 1.4.2      # set an exact version
#   ./publish.sh none       # don't bump; publish current package.json version
#
# What it does:
#   1. refuses to run with a dirty working tree (so the version commit is clean)
#   2. bumps the version  -> `npm version` makes a commit + tag
#   3. builds dist/        -> also runs automatically via prepublishOnly
#   4. publishes to npm
#   5. pushes the commit + tag to GitHub
#
set -euo pipefail
cd "$(dirname "$0")"

# --- 0. require a clean tree -------------------------------------------------
if [[ -n "$(git status --porcelain)" ]]; then
    echo "✗ Working tree is dirty. Commit or stash your changes first." >&2
    git status --short >&2
    exit 1
fi

npm login

BUMP="${1:-}"

# --- 1. prompt for bump type if not given on the command line ----------------
if [[ -z "$BUMP" ]]; then
    CUR="$(node -p "require('./package.json').version")"
    next() {
        node -e "const v=require('./package.json').version.split('.').map(Number);
            const t='$1';
            if(t==='major')console.log((v[0]+1)+'.0.0');
            else if(t==='minor')console.log(v[0]+'.'+(v[1]+1)+'.0');
            else console.log(v[0]+'.'+v[1]+'.'+(v[2]+1));"
    }
    echo "Current version: $CUR"
    echo "Select version bump:"
    echo "  1) patch  ($CUR -> $(next patch))"
    echo "  2) minor  ($CUR -> $(next minor))"
    echo "  3) major  ($CUR -> $(next major))"
    echo "  4) none   (publish current $CUR as-is)"
    echo "  5) custom (type an exact version)"
    read -rp "Choice [1-5]: " choice
    case "$choice" in
        1) BUMP="patch" ;;
        2) BUMP="minor" ;;
        3) BUMP="major" ;;
        4) BUMP="none" ;;
        5) read -rp "Exact version (e.g. 1.4.2): " BUMP ;;
        *) echo "✗ Invalid choice." >&2; exit 1 ;;
    esac
fi

# --- 2. bump version (creates a commit + tag, unless 'none') -----------------
if [[ "$BUMP" == "none" ]]; then
    echo "→ Skipping version bump; publishing current version."
else
    echo "→ Bumping version ($BUMP)…"
    npm version "$BUMP" -m "release: v%s"
fi

VERSION="$(node -p "require('./package.json').version")"
echo "→ Version is now $VERSION"

# --- 3. build (prepublishOnly runs this too; explicit here for visibility) ---
echo "→ Building browser bundles…"
npm run build

# --- 4. publish to npm -------------------------------------------------------
echo "→ Publishing to npm…"
npm publish --access public

# --- 5. push commit + tag to GitHub ------------------------------------------
echo "→ Pushing to GitHub…"
git push
git push --tags

echo ""
echo "✓ Published squanlib@$VERSION"
echo "  npm:      https://www.npmjs.com/package/squanlib"
echo "  jsDelivr: https://cdn.jsdelivr.net/npm/squanlib@$VERSION/dist/squanlib.umd.min.js"
echo "  unpkg:    https://unpkg.com/squanlib@$VERSION/dist/squanlib.umd.min.js"
echo "  (CDNs may take a few minutes to pick up the new version.)"
