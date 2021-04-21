const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    //Test case:1
    test('should allow a recipe to be added', () => {
      expect(true). toBe(true);

      //Test case: 2
      //Arrange
      const recipeBook = new Cookbook();
      const recipeName = 'Pasta';
      const recipeIngredients = ['Pasta Sauce', 'Pasta Noodles', 'Tomato', 'Onion'];

      const expectedResult = {'Pasta': ['Pasta Sauce', 'Pasta Noodles', 'Tomato', 'Onion']} 
      
      //Act
      recipeBook.addRecipe(recipeName, recipeIngredients);

      //Assert
      expect(recipeBook.recipes).toEqual (expectedResult);
    });
  });



  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      
      //Test case: 3
      //Arrange
      const recipeBook = new Cookbook();
      recipeBook.addRecipe('Noodles', ['Noodles', 'Spices', 'Tomato', 'Onion']);

      //Act
      const recipeName = recipeBook.getRecipe('Noodles');

      //Assert
      expect(recipeName).toEqual (['Noodles', 'Spices', 'Tomato', 'Onion']);
     

    });
  });



  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

      //Test case: 4
      //Arrange
      const recipeBook = new Cookbook();

      //Act
      

      //Assert
      
    });
  });



  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
