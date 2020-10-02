import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title  Covid cases */}
                <Typography className="infoBox_title" color="textSecondary">
                {title}
                </Typography>

                <h2 className="infoBox_cases"> {cases}</h2>


                {/* 120k+ Number of cases */}


                {/* 1.2m Total */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>


            </CardContent>
            
        </Card>
    )
}

export default InfoBox
