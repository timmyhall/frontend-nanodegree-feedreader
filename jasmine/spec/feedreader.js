$(function() {

    // Test suite 'RSS Feeds'
    describe('RSS Feeds', function() {

        // Test that allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop through all items in allFeeds array to make sure urls are defined and not empty
        it('should have a defined URL', function() {
            for (i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Loop through all items in allFeeds array to make sure names are defined and not empty
        it('should have a defined name', function() {
            for (i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // Test suite 'The menu'
    describe('The menu', function() {

        // Test that ensures the menu element is hidden by default
        it('should have menu element hidden by default by having class menu-hidden', function() {
            var bodyClass = document.body.className;
            expect(bodyClass).toContain('menu-hidden');
        });

        // Test suite 'when clicked'
        describe('when clicked', function() {

            // Test to see if menu displays when clicked
            it('should display the menu', function() {
                $('.menu-icon-link').click();
                expect($(document.body).hasClass('menu-hidden')).toBeFalsy();
            });

            // Test to see if menu hides after clicked then clicked again
            // Depending on if I 'run all' or run the single spec, the test passes or fails
            it('should hide the menu', function() {
                $('.menu-icon-link').click();
                // $('.menu-icon-link').click();               
                expect($(document.body).hasClass('menu-hidden')).toBeTruthy();
            });
        });
    });

    // Test suite 'Initial Entries'
    describe('Initial Entries', function() {

        // loadFeed() is asynchronous so this test will require the
        // use of Jasmine's beforeEach and asynchronous done() function
        beforeEach(function(done) {
            loadFeed(0, done);

        });

        // Test that there is at least a single .entry element within the .feed container
        it('has added entries', function() {
            expect($('.feed .entry').length).not.toBe(0);

        });
    });

    // Test suite 'New Feed Selection'
    describe('New Feed Selection', function() {

        // Define content of feeds we would like to test
        var contentOne, contentTwo;

        // loadFeed() is asynchronous so this test will require the
        // use of Jasmine's beforeEach and asynchronous done() function
        beforeEach(function(done) {
            loadFeed(0, function() {
                contentOne = $('.feed').html();
                titleOne = $('.header-title').html();

                // Load CSS feed
                loadFeed(2, done);
            });
        });

        // Test that the content actually changes by the loadFeed function
        it('should be new stuff', function() {

            // Define new content and title from 'HTML5 Rocks' Feed
            contentTwo = $('.feed').html();
            expect(contentTwo).not.toBe(contentOne);

        });
    });
}());