migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c")

  collection.listRule = null

  return dao.saveCollection(collection)
})
