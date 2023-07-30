migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eguh8e3wam8v1tr")

  collection.name = "Products"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "go41erp6",
    "name": "Image_Alts",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eguh8e3wam8v1tr")

  collection.name = "products"

  // remove
  collection.schema.removeField("go41erp6")

  return dao.saveCollection(collection)
})
