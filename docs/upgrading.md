---
template: overrides/main.html
---

# Upgrading

!!! error "Updating"
    Updating netSys isn't as easy compared to installing it. All custom modification will be erased,
    you should save your config.json, rules.json, package.json, and commands directory.
    There will eventually be a way to update netSys without data loss.

Upgrade netSys by running

```
git clone {URL}
```

Upgrade netSys Modules (NPM Modules) by running

```
npm install
```

To check your version of netSys, run your prefix followed with the command `ver`
You should recieve a response similar to,

```
STAR_NETSYS - VER=4.1.7 - DEPMAG=2.0 - GITHUB
```

If the following command is not avaliable or if you have no access to the terminal in real-time you can inspect the `package.json` file to check 
for the current version.

## Upgrading from netSys 3.9 to 4.1

!!! failure "Updating Notice"
    netSys 4.1 is a major update. It includes the full restructuring of the directories and includes a completely 
    rewritten depMag loader. netSys 3.9 is still being supported, along with depMag 1.0, but will be deprecated
    in the near future to prioritize netSys 4.1 and the new components.
    Although it is a tough move and an extremely complicated one, netSys 4.1 was created for efficiency across
    all netSys platforms, and is designed to have all the features one needs instead of internal modification
    of the netSys core which can cause damage or even sometimes completely break netSys.

### What's new?

- depMag 2.0
- Reverted MFCS in favor of FBCS
- Updated node.js and modules
- Rewrote netSys Core
- New built-in API
- Added full music/HTTPS support using ytdl-core libraries and default UNI-HTTPS libraries.

## Upgrading from netSys 4.1 to 4.5

!!! info "INFO"
    This update has not been released and should be considered a "concept roadmap."

### What is coming?

- Translation (Language)
- Support for games
- MongoDB and .json R/W support
- Updates and Fixes
- Improved Music playback
- Improve built-in API