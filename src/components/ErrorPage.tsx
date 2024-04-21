import { Box, Grid, Text, Title, } from "@mantine/core"

const ErrorPage = () => {
    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center', }}>
                <Grid>
                    <Grid.Col span={12} style={{padding:'5px'}}>
                        <Title order={1}>Oops! 404 | Not Found</Title>
                        <Text size="lg" style={{textAlign:'center'}}>The page you are looking for doesn't exist</Text>
                    </Grid.Col>
                </Grid>
            </Box>

        </>
    )
}
export default ErrorPage