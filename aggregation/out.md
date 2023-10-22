You can access the collection you want to use with dot notation:

db.sightings
Use the aggregate method to set up the aggregation pipeline.

The first stage that we use is $match, which accepts a simple query to filter for specific documents. In this case, $match will filter for documents where "date" is the year 2022. The dates of the sightings are stored in BSON Date format. This means that using ISODate formatting in our query allows us to use comparison operators. Those comparison operators are $gt (greater than) to find dates after 0:00 on January 1, 2022, and $lt (less than) to find dates before 0:00 on January 1, 2023.

db.sightings.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate('2022-01-01T00:00:00.0Z'),
        $lt: ISODate('2023-01-01T00:00:00.0Z')
      }
    }
  }
])
Then we want to add an $out stage to create a new collection with those matched documents, called `sightings_2022``.

db.sightings.aggregate([
  {
    $match: {
        date: {
            $gte: ISODate('2022-01-01T00:00:00.000Z'),
            $lt: ISODate('2023-01-01T00:00:00.000Z')
        }
    }
  }, {
    $out: 'sightings_2022'
  }
])
To confirm that we have created the collection and populated it succesfully, we can run a findOne() operation with db.sightings_2022.findOne().

Solved Code
db.sightings.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate('2022-01-01T00:00:00.0Z'),
        $lt: ISODate('2023-01-01T00:00:00.0Z')
      }
    }
  },
  {
    $out: 'sightings_2022'
  }
])
db.sightings_2022.findOne()