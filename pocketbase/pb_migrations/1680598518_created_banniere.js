migrate((db) => {
  const collection = new Collection({
    "id": "g6kpze9otzjrzo1",
    "created": "2023-04-04 08:55:18.445Z",
    "updated": "2023-04-04 08:55:18.445Z",
    "name": "banniere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9dqi6ibw",
        "name": "img",
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
  const collection = dao.findCollectionByNameOrId("g6kpze9otzjrzo1");

  return dao.deleteCollection(collection);
})
