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
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Loop through all items in allFeeds array to make sure names are defined and not empty
        it('should have a defined name', function(){
            for (i = 0; i < allFeeds.length; i++) {
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
                expect($(document.body).hasClass('menu-hidden')).not.toBe(true);
            });

            // Test to see if menu hides after clicked then clicked again
            it('should hide the menu', function() {
                $('.menu-icon-link').click();
                $('.menu-icon-link').click();               
                expect($(document.body).hasClass('menu-hidden')).toBe(true);
            });
          });
    });

    describe('Initial Entries', function() {


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('has added entries', function() {

         });
    });

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should be new stuff', function() {

        });
    });
}());
