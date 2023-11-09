const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/all', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll(
    {
      order: ['tag_name'],
      include: [
        {
          model: Product,
          as: 'products'
        },

        /*{
          model: ProductTag,
          as: 'product_tags'
        },*/

      ]
    })
    .then((tagData => {
      res.json(tagData)
    }))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/find/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    inlcude: [

      {
        model: Product,
        as: 'products'
      }
    ]
  })
});

router.post('/new', (req, res) => {
  // create a new tag
  Tag.create(
    {
      tag_name: req.body.tag_name

    })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/update/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/delete/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
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
    }
    )
});

module.exports = router;
