import { BarChart } from '@mantine/charts';
import {Box, Text} from "@mantine/core";
import type { WatchDetails, Category } from "@/app/page";



const Results = ({ watchDetails }: {watchDetails: WatchDetails | null}) => {

  const { name, details, results } = watchDetails || { name: '', details: '', results: []}

  console.log(watchDetails)
  return (
    <Box maw={900} mx="auto" p={20}>
      <Text size="xl" mb={10}>{name}</Text>
      <Text size="sm" mb={10}>{details}</Text>
      {results?.length > 0 &&
      <BarChart
        h={400}
        data={results}
        type="default"
        withBarValueLabel={true}
        withTooltip={false}
        dataKey="category"
        orientation="vertical"

        xAxisLabel="Rating"
        xAxisProps={{domain: [0, 10]}}
        barProps={{radius: 10, height: 500}}
        series={[{name: 'rating', color: 'blue.6'}]}
        getBarColor={(value) => getColor(value)}
      />
      }
      {results?.map(result =>
        <Box key={result.category}>
          <Text fw={700}>{result.category} - {result.rating} / 10</Text>
          <p>{result.comments}</p>
        </Box>
      )}
    </Box>
  );
};

const getColor = (rating: number) => {
  if (rating >= 9) {
    return 'green.6';
  }
  if (rating >= 6) {
    return 'yellow.5';
  }
  return 'red.6';
}

export default Results;