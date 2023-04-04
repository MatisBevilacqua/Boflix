migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7feh2go",
    "name": "movie_title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7feh2go",
    "name": "movie_tilte",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
