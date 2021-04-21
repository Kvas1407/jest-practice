const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
    
      //Test case: 1       
      //Arrange
    const myCookBook = new Cookbook();
    const myCookBookCli = new CookbookCli(myCookBook);

   //Act
   const msg = myCookBookCli.run('add', 'Coffee', ['Coffee Powder', 'Sugar', 'Milk']);

    //Assert
    expect(msg).toBe('Successfully added the following recipe: Coffee')
    
      //Test case: 2       
      //Arrange
      const myCookBookRecent = new Cookbook();
      const myCookBookCliRecent = new CookbookCli(myCookBookRecent);
  
     //Act
     const msgNew = myCookBookCliRecent.run('add', []);
  
      //Assert
      expect(msgNew).toBe('Sorry dear friend! Please do include any recipe');
  
  });
  });



  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {

    });
  });



  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

    });
  });



  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
