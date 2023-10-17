# Key Points
- Data that is accessed together should be stored together
    - If a query needs to access multiple collections, there is an associated resource and time cost

## 1 - 1
- Single data entity is connected to another single data point

## 1 - Many
- Single data entity connected to many related data points
- e.g. one movie has many actors. Can store array of objects (nested array)

## Many - Many
- Any number of entities are connected to any number of data entities

## 2 primary ways to model relationships are REFERENCING and EMBEDDING
Embedding: Take related data and insert it into our document
Referencing: Refer to other documents outside of the document (basically take objectIds from other documents)