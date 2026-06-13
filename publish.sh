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

BUMP="${1:-patch}"

# --- 1. require a clean tree -------------------------------------------------
if [[ -n "$(git status --porcelain)" ]]; then
    echo "✗ Working tree is dirty. Commit or stash your changes first." >&2
    git status --short >&2
    exit 1
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
