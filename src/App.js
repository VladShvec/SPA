import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
    BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    CardActions,
    Container, DialogContent, DialogContentText,
    dividerClasses,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogTitle,
    Grid,
    Paper,
    TextField
} from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

import {useState} from "react";
const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(1)
    },
    title:{
        flexGrow: 1
    },
    mainFeaturesPost:{
    position: "relative",
    color: 'theme.palette.common.white',
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    },
    mainFeaturesPostContent:{
        position: "relative",
        padding: theme.spacing(3)
    },
    overlay:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,0.3)"
    },
    app:{
        position: 'relative'
    },
    main:{
        position: 'relative'
    },
    mainContent:{

    },
    mainButtons:{

    },
    cardGrid:{
        marginTop: theme.spacing(4)
    },
    card:{

    },
    cardMedia:{
        paddingTop: '56.25%'
    },
    cardContent:{
        flexGrow: 1
    },

}))
const cards = [1,2,3,4,5,6,7,8,9]
function App() {
    const classes = useStyles()
    const [value, setValue] = useState('recents')
    const handleChange = (event , newValue) =>{
        setValue(newValue)
    }
    const [open , setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
      <>

        <AppBar className={classes.app} position='relative'>
            <Container fixed>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        edge='start'
                        color="inherit"
                        aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'  className={classes.title}>SomeShop</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant='outlined' onClick={handleClickOpen}>Log in</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Log in to see videos
                                </DialogContentText>
                                <TextField
                                autoFocus
                                margin='dense'
                                id='name'
                                label='EmailAdress'
                                type='email'
                                fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin='dense'
                                    id='pass'
                                    label='Password'
                                    type='password'
                                    fullWidth
                                />


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color='primary'>Cancel</Button>
                                <Button onClick={handleClose} color='primary'>Log in</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Button color="secondary" variant='contained'>Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>

          <main className={classes.main}>
              <Paper
                  className={classes.mainFeaturesPost}
                  style={{backgroundImage: `url(https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340)`}}
              >
                <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        <Typography
                        component='h1'
                        variant='h3'
                        color='inherit'
                        gutterBottom
                        >
                            SomeShop Blog
                        </Typography>
                            <Typography
                                component='h5'
                                color='inherit'
                                paragraph
                            >
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ducimus in incidunt minima
                                molestias possimus quae saepe temporibus totam ullam
                                voluptates! Facere itaque sequi veritatis voluptatibus!
                            </Typography>
                            <Button variant='contained' color='secondary'>Leanr More</Button>
                        </div>
                    </Grid>
                </Grid>
                </Container>
              </Paper>
              <div className={classes.mainContent}>
                  <Container maxWidth='md'>
                      <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
                          SomeShopBlog
                      </Typography>
                      <Typography variant='h5' align='center' color='textSecondary' gutterBottom >
                          Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Ducimus in incidunt minima
                          molestias possimus quae saepe temporibus totam ullam
                          voluptates! Facere itaque sequi veritatis voluptatibus!
                      </Typography>
                      <div className={classes.mainButtons}>
                        <Grid container spacing={5} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color="primary">Start Now</Button>

                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color="primary">Learn More</Button>
                            </Grid>
                        </Grid>
                      </div>
                      <Container className={classes.cardGrid} maxWidth='md'>
                        <Grid container spacing={4}>

                            {/* eslint-disable-next-line array-callback-return */}
                            {cards.map((card) => (

                                <Grid item  key={card} xs='12' sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.cardMedia}
                                                   image='https://media.istockphoto.com/photos/wooden-blocks-with-llc-limited-liability-company-business-concept-picture-id1288715721?b=1&k=20&m=1288715721&s=170667a&w=0&h=uwrCCurvGb0XGE-yM1ZR2cydoNiKdIgnNoexJqZEn5c='
                                                   title='Image title'>

                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant='h5' gutterBottom>
                                                Blog Post
                                            </Typography>
                                            <Typography variant='h5' gutterBottom>
                                                Blog Description Blog Description Blog Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size='small' color='primary'>
                                                Viev
                                            </Button>
                                            <Button size='small' color='primary'>
                                                Edit
                                            </Button>
                                            <LayerIcon />
                                            <PlayCircleFilledIcon />
                                        </CardActions>
                                    </Card>
                                </Grid>

                            ))}


                            </Grid>
                      </Container>
                  </Container>
              </div>

          </main>
          <footer>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
              <BottomNavigation
                  value={value}
              onChange={handleChange}
              className={classes.root}>
                  <BottomNavigationAction
                      label='Recents'
                      value='recents'
                      icon={<RestoreIcon />}
                  />
                  <BottomNavigationAction
                      label='Favorites'
                      value='favorites'
                      icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                      label='Nearby'
                      value='nearby'
                      icon={<LocationOnIcon />}
                  />
                  <BottomNavigationAction
                      label='Folder'
                      value='folder'
                      icon={<FolderIcon />}
                  />
              </BottomNavigation>
              <Typography align='center' variant='h6' component='p'  >

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.

              </Typography>
          </footer>
      </>

  );
}

export default App;
