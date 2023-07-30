migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eguh8e3wam8v1tr")

  // remove
  collection.schema.removeField("tnfbgqcp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eguh8e3wam8v1tr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnfbgqcp",
    "name": "CreatedAt",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
