migrate((db) => {
  const collection = new Collection({
    "id": "3by4cwv3qzklk7c",
    "created": "2023-04-04 08:23:20.185Z",
    "updated": "2023-04-04 08:23:20.185Z",
    "name": "movie",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xe2vwcgm",
        "name": "field",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3by4cwv3qzklk7c");

  return dao.deleteCollection(collection);
})
