migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glwj1dcs3wy2nk7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrgcw5bx",
    "name": "Fulfilled",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glwj1dcs3wy2nk7")

  // remove
  collection.schema.removeField("nrgcw5bx")

  return dao.saveCollection(collection)
})
