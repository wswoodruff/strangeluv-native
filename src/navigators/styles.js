const Theme = require('styles/theme');
const { styled: MaterialIcon } = require('components/MaterialIcon');

module.exports = {

    MenuIcon: MaterialIcon.attrs({
        size: Theme.iconSize
    })`
        padding-right: 12px;
    `
};
