#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

sem_ver_type="patch"
new_version=$(get_next_version $sem_ver_type)

# 1. Merges the hotfix branch back into 'master'
git checkout master
# 2. Merge made by recursive
git merge --no-ff "hotfix/${new_version}"
# 3. Tags the release
git push origin "v${new_version}"

# 4. Check if release branch exists
release_branches_list=$(git branch -a --list "release/*")
IFS=' '
read -a release_branches <<< "$release_branches_list"
# assuming only one release is active at a time
release_branch=${release_branches[0]}
if [ -z "$release_branch" ]; then
  # 5. when no release branch exists, then back-merges the release into 'develop'
  git checkout develop
  git merge --no-ff "hotfix/${new_version}"
else
  git checkout "$release_branch"
  git merge --no-ff "hotfix/${new_version}"
fi

# 5. Removes hotfix branch
git branch -D "hotfix/${new_version}"
