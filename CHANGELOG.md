# Changelog

## [1.1.0] 2024-11-17

### New Features
- Added the `Deque` class to implement a double-ended queue data structure.
- Implemented the `PriorityQueue` class that uses a binary heap to manage priorities.
- Introduced the `Graph` class to represent graphs and perform depth-first and breadth-first searches.
- Created the `Trie` class to manage a prefix tree.
- Added mathematical functions such as `mean`, `median`, `mode`, `gcd`, `lcm`, `factorial`, and `perm`.
- Included string manipulation functions like `slugify`, `capitalize`, and `reverse`.
- Implemented validation functions such as `isEmail` and `isPhoneNumber`.
- Developed the `Matrix` class to represent matrices and perform operations on them.
- Added promise functions like `timeout`, `delay`, and `allSettledTimeout`.
- Introduced the `deepFreeze` function to deeply freeze objects.
- Implemented array manipulation functions like `chunk`, `unique`, `intersection`, and `zip`.
- Added `hash` function for generating hash values using SHA-256 or MD5 algorithms.
- Implemented `encrypt` and `decrypt` functions for secure data encryption and decryption using AES-256-GCM.
- Created `variance` and `standardDeviation` functions for statistical calculations.

### Changes
- Improved documentation for existing functions and classes.
- Optimized the performance of some mathematical functions.

## [1.1.1] 2024-11-17

### Changes
- Corrected version from `unreleased` to `1.1.0`.
- Fixed export issue in `package.json` to ensure files can be used correctly.

## [1.2.0] - 2025-01-09

### New Features
- **New function**: `mean` - Added a function to calculate the average of a list of numbers.
- **New function**: `median` - Added a function to calculate the median of a list of numbers.
- **New function**: `mode` - Added a function to calculate the mode(s) of a list of numbers.
- **New function**: `perm` - Added a function to calculate the number of permutations.
- **New function**: `range` - Added a function to generate a range of numbers from start to end.

### Improved
- **Function**: `omit` - Improved the `omit` function to support both an array of keys and a predicate function.
- **Function**: `mergeDeep` - Completely reworked the `mergeDeep` function to support deep merging of multiple objects with enhanced type safety.
- **Function**: `invert` - Reworked the `invert` function to correctly return types and made some improvisational changes.

### Fixed
- **Type Safety**: Enhanced type definitions across various functions to ensure accurate return types and compatibility.

### Changes
- Improved documentation for existing functions.
- Some math functions were not exported correctly in previous versions. This issue has been fixed.