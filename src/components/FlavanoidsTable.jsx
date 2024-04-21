import React from 'react'
import { Box, Table } from '@mantine/core';
import wineData from './wine_data.json'

const FlavanoidsTable = () => {

    const [class1, setClass1] = React.useState([])
    const [class2, setClass2] = React.useState([])
    const [class3, setClass3] = React.useState([])

    React.useEffect(() => {
        const filterDataByAlcohol = () => {
            const class1Data = [];
            const class2Data = [];
            const class3Data = [];

            wineData.forEach((element) => {
                if (element.Alcohol === 1) {
                    class1Data.push(element.Flavanoids);
                } else if (element.Alcohol === 2) {
                    class2Data.push(element.Flavanoids);
                } else if (element.Alcohol === 3) {
                    class3Data.push(element.Flavanoids);
                }
            });

            setClass1(class1Data);
            setClass2(class2Data);
            setClass3(class3Data);

            console.log(class2Data)
            console.log(class1)
        };

        filterDataByAlcohol();
    }, []);

    const calculateMean = (arr) => {
        if (arr.length === 0) return 0;
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return sum / arr.length;
    };

    const calculateMode = (arr) => {
        if (arr.length === 0) return null;
        const counts = {};
        arr.forEach((value) => {
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
        const sortedArr = arr.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedArr.length / 2);
        if (sortedArr.length % 2 === 0) {
            return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
        } else {
            return sortedArr[middleIndex];
        }
    };


    const elements = [
        { flavanoids: 'Flavanoids Mean', mean: calculateMean(class1), },
        { flavanoids: 'Flavanoids Median', median: calculateMedian(class1),  },
        { flavanoids: 'Flavanoids Mode', mode: calculateMode(class1),  },

        { flavanoids: 'Flavanoids Mean', mean: calculateMean(class2), },
        { flavanoids: 'Flavanoids Median', median: calculateMedian(class2),  },
        { flavanoids: 'Flavanoids Mode', mode: calculateMode(class2),  },

        { flavanoids: 'Flavanoids Mean', mean: calculateMean(class3), },
        { flavanoids: 'Flavanoids Median', median: calculateMedian(class3),  },
        { flavanoids: 'Flavanoids Mode', mode: calculateMode(class3),  },
    ];

    const rows = elements.map((element) => (

        <Table.Tr key={element.name}>
            <Table.Td>{element.flavanoids}</Table.Td>
            <Table.Td>{element.mean}</Table.Td>
            <Table.Td>{element.median}</Table.Td>
            <Table.Td>{element.mode}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <div>FlavanoidsTable</div>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Measure</Table.Th>
                        <Table.Th>Class 1</Table.Th>
                        <Table.Th>Class 2</Table.Th>
                        <Table.Th>Class 3</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    )
}

export default FlavanoidsTable