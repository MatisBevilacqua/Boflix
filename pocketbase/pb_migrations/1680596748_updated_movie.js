migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psvrppxx",
    "name": "movie_img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psvrppxx",
    "name": "img_movie",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
