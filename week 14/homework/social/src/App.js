import style from './App.module.css';
import FirstTabs from './dashboard/FirstTabs.js'
import SecondTabs from './dashboard/SecondTabs.js'
import facebookIcon from './images/iconFacebook.svg'
import instagramIcon from '../src/images/iconInstagram.svg'
import twitterIcon from './images/iconTwitter.svg'
import youtubeIcon from './images/iconYoutube.svg'
import downIcon from './images/iconDown.svg'
import upIcon from './images/iconUp.svg'


const firstTabs = [{
  icon: facebookIcon,
  user: '@nathanf',
  number: '1987',
  type: 'Followers',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  howMany: '12 Today',
  upperColor: 'linear-gradient(90deg, hsl(208, 92%, 53%), hsl(208, 92%, 53%)) 1',
},
{
  icon: twitterIcon,
  user: '@nathanf',
  number: '1044',
  type: 'Followers',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  howMany: '99 Today',
  upperColor: 'linear-gradient(90deg, hsl(203, 89%, 53%), hsl(203, 89%, 53%)) 1',
},
{
  icon: instagramIcon,
  user: '@realnathanf',
  number: '11k',
  type: 'Followers',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  howMany: '1099 Today',
  upperColor: 'linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1',
},
{
  icon: youtubeIcon,
  user: 'Nathan F.',
  number: '8239',
  type: 'Subscribers',
  upOrDown: downIcon,
  colorRate: 'hsl(356, 69%, 56%)',
  howMany: '144 Today',
  upperColor: 'linear-gradient(90deg, hsl(348, 97%, 39%), hsl(348, 97%, 39%)) 1',
}]

const secondTabs = [{
  type: 'Page Views',
  icon: facebookIcon,
  number: '87',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  rate: '3%',
},
{
  type: 'Likes',
  icon: facebookIcon,
  number: '52',
  upOrDown: downIcon,
  colorRate: 'hsl(356, 69%, 56%)',
  rate: '2%',
},
{
  type: 'Likes',
  icon: instagramIcon,
  number: '5462',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  rate: '2257%',
},
{
  type: 'Page Views',
  icon: instagramIcon,
  number: '52k',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  rate: '1375%',
},
{
  type: 'Retweets',
  icon: twitterIcon,
  number: '117',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  rate: '303%',
},
{
  type: 'Likes',
  icon: twitterIcon,
  number: '507',
  upOrDown: upIcon,
  colorRate: 'hsl(163, 72%, 41%)',
  rate: '553%',
},
{
  type: 'Likes',
  icon: youtubeIcon,
  number: '107',
  upOrDown: downIcon,
  colorRate: 'hsl(356, 69%, 56%)',
  rate: '19%',
},
{
  type: 'Total Views',
  icon: youtubeIcon,
  number: '1407',
  upOrDown: downIcon,
  colorRate: 'hsl(356, 69%, 56%)',
  rate: '12%',
}]

function App() {
  return (
    <div className={style.App}>

      <FirstTabs firstTabList={firstTabs}/>

      <SecondTabs secondTabList={secondTabs} />
    </div>
  );
}

export default App;
