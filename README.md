## Obsidian Native Scrollbars

This plugin enables native scrollbars in Obsidian. By default, Obsidian's scrollbars are themed and can't be reverted using purely CSS, thus, a plugin is needed.

**Obsidian's default scrollbars**

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/non-native-scrollbars.gif" alt="A short gif demonstraiting obsidian's default scrollbars">


**Native macOS scrollbars**

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/native-scrollbars.gif" alt="A short gif demonstraiting native scrollbars">

## Known issue: light scroll bars in dark mode

On macOS, the native scrollbar background color is determined by a scroll container's background color. If a background color isn't set, the scrollbars will be in light mode. Nearly transparent background colors will work for this, eg: `background-color: #00000001;`

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/darkmode-issue.gif" alt="A short gif demonstraiting issues with dark-mode scrollbars">

https://codepen.io/mgmeyers/pen/KKXyjYv

**Note:** When this plugin is active, the `.native-scrollbars` class is added to the body element.

## Support

If you find this plugin useful, consider supporting its development:

[![GitHub Sponsors](https://img.shields.io/github/sponsors/mgmeyers?label=Sponsor&logo=GitHub%20Sponsors&style=for-the-badge)](https://github.com/sponsors/mgmeyers)

<a href="https://www.buymeacoffee.com/mgme"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mgme&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a>