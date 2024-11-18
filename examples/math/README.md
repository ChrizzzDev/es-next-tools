# Math Utility Functions

This module provides mathematical and statistical functions optimized for common calculations and data analysis tasks.

## Statistical Functions

### mean
Calculates the arithmetic mean of a set of numbers.


## clamp

The `clamp` function restricts a number within a specified range. This can be useful in scenarios like limiting user input or ensuring values stay within acceptable bounds.

### Example
```typescript
const temperature = 120; // Temperature in Fahrenheit
const safeTemperature = clamp(32, temperature, 100);
// safeTemperature will be 100, as it exceeds the maximum limit
```

## gcd

The `gcd` function calculates the greatest common divisor of two numbers. This can be useful in simplifying fractions or finding common factors.

### Example
```typescript
const num1 = 56;
const num2 = 98;
const greatestCommonDivisor = gcd(num1, num2);
// greatestCommonDivisor will be 14
```

## lcm

The `lcm` function calculates the least common multiple of two numbers. This is useful in scenarios like scheduling events that repeat at different intervals.

### Example
```typescript
const eventA = 4; // repeats every 4 days
const eventB = 6; // repeats every 6 days
const leastCommonMultiple = lcm(eventA, eventB);
// leastCommonMultiple will be 12, meaning both events align every 12 days
```

## mean

The `mean` function calculates the average of a set of numbers. This can be useful for analyzing data sets, such as calculating the average score of students.

### Example
```typescript
const scores = [85, 90, 78, 92, 88];
const averageScore = mean(...scores);
// averageScore will be 86.6
```

## median

The `median` function finds the middle value in a set of numbers. This is useful for understanding the central tendency of a data set, especially when outliers are present.

### Example
```typescript
const ages = [22, 25, 29, 30, 35, 40, 50];
const medianAge = median(...ages);
// medianAge will be 30
```

## variance

The `variance` function calculates how much a set of numbers varies from the mean. This is useful in statistics to understand the spread of data points.

### Example
```typescript
const dataPoints = [10, 12, 23, 23, 16, 23, 21];
const dataVariance = variance(dataPoints);
// dataVariance will be approximately 18.57
```

## standardDeviation

The `standardDeviation` function calculates the standard deviation of a set of numbers, providing insight into the amount of variation or dispersion in a data set.

### Example
```typescript
const heights = [150, 160, 165, 170, 180];
const heightStandardDeviation = standardDeviation(heights);
// heightStandardDeviation will be approximately 10.00
```

## perm

The `perm` function calculates the number of permutations of `n` items taken `k` at a time. This is useful in combinatorial problems where the order of selection matters.

### Example
```typescript
const totalItems = 5; // total items
const selectItems = 3; // items to select
const permutations = perm(totalItems, selectItems);
// permutations will be 60
```

## comb

The `comb` function calculates the number of combinations of `n` items taken `k` at a time. This is useful in scenarios where the order of selection does not matter, such as lottery draws.

### Example
```typescript
const totalChoices = 10; // total choices
const selectChoices = 4; // choices to select
const combinations = comb(totalChoices, selectChoices);
// combinations will be 210
```

## lerp

The `lerp` function performs linear interpolation between two numbers. This is useful in animations or transitions where you want to smoothly move from one value to another.

### Example
```typescript
const startValue = 0;
const endValue = 100;
const interpolationFactor = 0.25; // 25%
const interpolatedValue = lerp(startValue, endValue, interpolationFactor);
// interpolatedValue will be 25
```

## dtr

The `dtr` function converts degrees to radians. This is useful in trigonometric calculations where angles need to be in radians.

### Example
```typescript
const angleInDegrees = 90;
const angleInRadians = dtr(angleInDegrees);
// angleInRadians will be approximately 1.57
```

## rtd

The `rtd` function converts radians to degrees. This is useful when working with trigonometric functions that require angles in degrees.

### Example
```typescript
const angleInRadians = Math.PI; // 180 degrees
const angleInDegrees = rtd(angleInRadians);
// angleInDegrees will be 180
```

## Real-World Use Cases

### Financial Analysis
```typescript
const investmentReturns = [0.05, 0.08, 0.03, 0.12, -0.02];
const analysis = {
  average: mean(...investmentReturns),
  volatility: standardDeviation(investmentReturns),
  median: median(...investmentReturns)
};
```

### Quality Control
```typescript
const measurements = [10.2, 10.1, 10.3, 10.15, 10.25];
const qualityControl = {
  averageMeasurement: mean(...measurements),
  deviation: standardDeviation(measurements),
  withinLimits: (deviation: number) => deviation < 0.15
}
```

## Best Practices

1. Numerical Precision:
   - Use floating-point numbers with caution.
   - Round results appropriately for context.
   - Consider rounding errors in calculations.

2. Performance:
   - Cache results of expensive calculations.
   - Use optimized algorithms.
   - Consider dataset size impact.

3. Validation:
   - Check for invalid inputs.
   - Handle special cases.
   - Document constraints and limitations.

## Performance Considerations

1. Time Complexity:
   - `mean`: O(n).
   - `median`: O(n log n) due to sorting.
   - `variance/standardDeviation`: O(n).
   - `factorial`: O(n).
   - `gcd`: O(log min(a,b)).
   - `lcm`: O(log min(a,b)).

2. Optimizations:
   - Use Map for caching results.
   - Implement incremental calculations where possible.
   - Consider alternative algorithms for large datasets.