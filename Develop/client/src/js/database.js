import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const DB = await openDB("jate", 1);
  const syntax = DB.transaction("jate", "readwrite");
  const store = syntax.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request
  console.error("Information has been uploaded to the database", result)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Information has been uploaded to the database", result)
  const DB = await openDB("jate", 1);
  const syntax = DB.transaction("jate", "readonly");
  const store = syntax.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("Information has been uploaded to the database", result);
  return result.value
}

initdb();
