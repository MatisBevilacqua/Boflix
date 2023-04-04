migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7feh2go",
    "name": "field1",
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

  // remove
  collection.schema.removeField("w7feh2go")

  return dao.saveCollection(collection)
})
