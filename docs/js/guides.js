var BCLS = ( function () {
    var heading = document.getElementsByTagName('h1')[0],
        title = document.getElementsByTagName('title')[0],
        sections = document.getElementsByTagName('h2'),
        sidenav = document.getElementById('sidenav'),
        navList,
        navA,
        navItem,
        navText,
        i,
        iMax,
        item;

    /**
     * tests for all the ways a variable might be undefined or not have a value
     * @param {*} x the variable to test
     * @return {Boolean} true if variable is defined and has a value
     */
    function isDefined (x){
        if ( x === "" || x === null || x === undefined || x === NaN) {
            return false;
        }
        return true;
    };

    function buildSideNav() {
        if (isDefined(sections)) {
            navList =document.createElement('ul');
            navList.setAttribute('class', 'sidenav-list');
            navItem = document.createElement('li');
            navA = document.createElement('a');
            navA.setAttribute('href', '#toc0');
            navText = document.createTextNode('Top');
            navA.appendChild(navText);
            navItem.appendChild(navA);
            navList.appendChild(navItem);
            iMax = sections.length;
            for (i = 0; i < iMax; i++) {
                item = sections[i];
                navItem = document.createElement('li');
                navA = document.createElement('a');
                navA.setAttribute('href', '#toc' + (i + 1));
                navText = document.createTextNode(item.textContent);
                navA.appendChild(navText);
                navItem.appendChild(navA);
                navList.appendChild(navItem);
            }
            sidenav.appendChild(navList);
        }
    }

    function setTitle() {
        title.textContent = 'Videojs ' + heading.textContent;
    }

    setTitle();
    buildSideNav();
})();