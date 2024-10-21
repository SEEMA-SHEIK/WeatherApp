import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const HOT_URL="https://plus.unsplash.com/premium_photo-1670210080052-2fbd0ef2a3ad?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                         ? <ThunderstormIcon/>
                          : info.temp > 15 
                          ? HOT_URL 
                          : COLD_URL
                        }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city} {
                        info.humidity > 80
                         ? RAIN_URL
                          : info.temp > 15 
                          ? <WbSunnyIcon/>
                          : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <p>Temparatue: {info.temp}</p>
                       <p>Humidity: {info.humidity}</p>
                       <p>Maximum Temperature: {info.tempMax}&deg;C</p>
                       <p>Minimum Temperature: {info.tempMin}&deg;C</p>
                       <p>The weather described as <i>{info.weather}</i> and it feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    );
}