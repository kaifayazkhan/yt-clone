import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'

// import {demoProfilePicture} from '../utils/constants'


const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '95%', md: '320px' },
                height: '325px',
                margin: 'auto',
                marginTop: marginTop,

            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff'
                }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || null}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            mb: 2,
                            border: '1px solid #e3e3e3'
                        }}
                    />
                    <Typography variant='h6' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        {channelDetail?.snippet?.title || null}
                        <CheckCircleIcon sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Sbuscribers
                    </Typography>}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard