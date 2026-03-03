// The flyweight pattern is a useful way to conserve memory when we’re creating a large number of similar objects.
// minimizes memory usage by sharing common state between many similar objects.

// Core Idea

// Split object state into two parts:
// 1️ Intrinsic State (Shared)
// Immutable
// Same across many objects
// Stored inside the flyweight

// 2️ Extrinsic State (Context-specific)
// Unique per usage
// Passed in at runtime
// Not stored in the flyweight

//in js protype inheritence is used as flyweight pattern
