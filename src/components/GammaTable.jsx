import React from 'react';
import { Box, Table, Title } from '@mantine/core';
import wineData from './wine_data.json';

const GammaTable = () => {
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    const processedData = wineData.reduce((acc, element) => {
      const alcoholClass = `Class ${element.Alcohol}`;
      acc[alcoholClass] = (acc[alcoholClass] || []).concat((element.Ash * element.Hue)/element.Magnesium);
      return acc;
    }, {});

    const classStatistics = Object.entries(processedData).map(([className, flavanoids]) => ({
      className,
      mean: calculateMean(flavanoids).toFixed(3),
      median: calculateMedian(flavanoids).toFixed(3),
      mode: calculateMode(flavanoids).toFixed(3),
    }));

    setTableData(classStatistics);
  }, []);

  // Helper functions (unchanged)
  const calculateMean = (arr) => {
    if (arr.length === 0) return 0;
    const numericArr = arr.map(Number); // Convert values to numbers
    const sum = numericArr.reduce((acc, val) => acc + val, 0);
    return sum / numericArr.length;
  };

  const calculateMode = (arr) => {
    if (arr.length === 0) return null;
    const numericArr = arr.map(Number); // Convert values to numbers
    const counts = {};
    numericArr.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
    let mode;
    let maxCount = 0;
    Object.keys(counts).forEach((key) => {
      const count = counts[key];
      if (count > maxCount) {
        mode = key;
        maxCount = count;
      }
    });
    return parseFloat(mode);
  };

  const calculateMedian = (arr) => {
    const numericArr = arr.map(Number); // Convert values to numbers
    const sortedArr = numericArr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
      return sortedArr[middleIndex];
    }
  };

  return (
    <>
     <Box style={{marginBottom:'10px'}}>
        <Title order={2} style={{ textAlign: "center" }}>
          Gamma Table
        </Title>
      </Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            <Table.Th>Class 1</Table.Th>
            <Table.Th>Class 2</Table.Th>
            <Table.Th>Class 3</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {/* Mean row */}
          <Table.Tr>
            <Table.Td>Gamma Mean</Table.Td>
            {tableData.map((row) => (
              <Table.Td key={row.className}>{row.mean}</Table.Td>
            ))}
          </Table.Tr>
          {/* Mode row */}
          <Table.Tr>
            <Table.Td>Gamma Mode</Table.Td>
            {tableData.map((row) => (
              <Table.Td key={row.className}>{row.mode}</Table.Td>
            ))}
          </Table.Tr>
          {/* Median row */}
          <Table.Tr>
            <Table.Td>Gamma Median</Table.Td>
            {tableData.map((row) => (
              <Table.Td key={row.className}>{row.median}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
};

export default GammaTable;
