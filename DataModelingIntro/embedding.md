# Embedding
- used when you have 1-many or many-many relationships in the data that's being stored
- Can simplify queries and improve query performance
- Also known as nested documents

Pros
- Avoids application joins
- Better performance for read operations
- Update in a 

Cons
- Overuse of embedding can create large documents
- Unbounded documents can hit the 16mb BSON limit