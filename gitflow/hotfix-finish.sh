#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

# 1. Merges the hotfix branch back into 'master'
git checkout master
# 2. Merge made by recursive
sem_ver_type="patch"
new_version=$(get_next_version $sem_ver_type)
git merge "hotfix/${new_version}" -m "Merging version ${new_version} into master\n Finishing htofix ${new_version}"
git push
# 3. Tags the release
git push origin "v${new_version}"

# 4. Check if release branch exists
release_branches_list=$(git branch -a --list "release/*")
IFS=' '
read -a release_branches <<< "$release_branches_list"
# assuming only one release is active at a time
release_branch=${release_branches[0]}
if [ -z "$release_branch" ]; then
  # 5. when no release branch exists, then back-merges the hotfix into 'develop'
  git checkout develop
  git merge "hotfix/${new_version}" -m "Merging version ${new_version} into develop\n Finishing hotfix ${new_version}"
  git push
else
  # 6. otherwise, back-merges the hotfix to release branch
  git checkout "$release_branch"
  git merge "hotfix/${new_version}" -m "Merging version ${new_version} into $release_branch\n Finishing hotfix ${new_version}"
  git push
fi

# 5. Removes hotfix branch
git branch -D "hotfix/${new_version}"
