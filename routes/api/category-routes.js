const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/all', (req, res) => {
  // find all categories
  Category.findAll({
    order: ['category_name'],
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        as: 'products'
      }
    ]

  }).then((categoryData => {
    res.json(categoryData)
  }))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/find/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    inlcude: [
      {
        model: Product,
        as: 'products'
      }
    ]
  }).then((CategoryData) => {
    res.json(CategoryData)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/new', (req, res) => {
  // create a new category
  Category.create(
    {
      category_name: req.body.category_name
    })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/update/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/delete/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    })
    .then((deletedCategory) => {
      res.json(deletedCategory)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })

});

module.exports = router;
