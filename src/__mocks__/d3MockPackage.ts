// __mocks__/d3.mock.js
jest.mock('d3');

// export const scaleTime = jest.fn().mockReturnValue({
//     range: jest.fn().mockReturnThis(),
//     domain: jest.fn().mockReturnThis(),
//   });
  
//   export const scaleLinear = jest.fn().mockReturnValue({
//     range: jest.fn().mockReturnThis(),
//     domain: jest.fn().mockReturnThis(),
//   });
  
//   export const line = jest.fn().mockReturnValue({
//     x: jest.fn().mockReturnThis(),
//     y: jest.fn().mockReturnThis(),
//   });
  
//   export const area = jest.fn().mockReturnValue({
//     x: jest.fn().mockReturnThis(),
//     y0: jest.fn().mockReturnThis(),
//     y1: jest.fn().mockReturnThis(),
//   });
  
//   export const select = jest.fn().mockReturnValue({
//     append: jest.fn().mockReturnThis(),
//     datum: jest.fn().mockReturnThis(),
//     attr: jest.fn().mockReturnThis(),
//     style: jest.fn().mockReturnThis()

//   });
  
//   export const axisBottom = jest.fn().mockReturnValue(jest.fn());
  
//   export const axisLeft = jest.fn().mockReturnValue(jest.fn());
  
//   export const axis = {
//     append: jest.fn().mockReturnThis(),
//     call: jest.fn().mockReturnThis(),
//   };

//   export const yScale = jest.fn().mockReturnValue({
//     range: jest.fn().mockReturnThis(),
//     domain: jest.fn().mockReturnThis(),
//   });
  
//   export const event = {
//     transform: jest.fn(),
//   };

// export const scaleOrdinal = jest.fn().mockReturnValue({
//     range: jest.fn().mockReturnThis(),
//     domain: jest.fn().mockReturnThis(),
//   });
  
// //   export const scaleLinear = jest.fn().mockReturnValue({
// //     range: jest.fn().mockReturnThis(),
// //     domain: jest.fn().mockReturnThis(),
// //   });
  
// //   export const line = jest.fn().mockReturnValue({
// //     x: jest.fn().mockReturnThis(),
// //     y: jest.fn().mockReturnThis(),
// //   });
  
// //   export const area = jest.fn().mockReturnValue({
// //     x: jest.fn().mockReturnThis(),
// //     y0: jest.fn().mockReturnThis(),
// //     y1: jest.fn().mockReturnThis(),
// //   });

//   export const min = jest.fn((data, accessor) => Math.min(...data.map(accessor)));
// export const max = jest.fn((data, accessor) => Math.max(...data.map(accessor)));
  
//   export const yScale = jest.fn().mockReturnThis();
//   export const call = jest.fn();
//   export const axisBottom = jest.fn();
//   export const axisLeft = jest.fn();
//   export const tickSize = jest.fn().mockReturnThis();
//   export const tickFormat = jest.fn().mockReturnThis();
//   export const tickValues = jest.fn().mockReturnThis();
//   export const selectAll = jest.fn().mockReturnThis();

// jest.mock('d3', () => ({
//   select: jest.fn().mockReturnThis(),
//   append: jest.fn().mockReturnThis(),
//   attr: jest.fn().mockReturnThis(),
//   selectAll: jest.fn().mockReturnThis(),
//   data: jest.fn().mockReturnThis(),
//   enter: jest.fn().mockReturnThis(),
// }));

// jest.mock('d3-scale', () => ({
//   scaleOrdinal: jest.fn().mockReturnValue(() => {
//     range: jest.fn().mockReturnThis()
//     // domain: jest.fn().mockReturnThis(),
//   }),
// }));

jest.mock('d3-selection', () => ({
  select: jest.fn(),
  selectAll: jest.fn(),
}));

jest.mock('d3-scale', () => ({
  scaleOrdinal: jest.fn(),
}));

jest.mock('d3-shape', () => ({
  arc: jest.fn(),
  pie: jest.fn(),
}));

