import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStylesProduct = makeStyles((theme) => ({
    root: {
      display: 'flex',
      cursor: 'pointer'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    title: {
        fontSize: "medium"
    },
    description: {
        fontSize: "small"
    },
    price : {
        fontWeight: "bold"
    }
  }));

  const useStylesProductModal = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    cover: {
      width: "50%",
    },
    root: {
      display: 'flex',
      width: "70%",
      height: "500px"
    },
    details: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: "wrap"
    },
    content: {
      flex: '1 0 auto',
    },
    title: {
      fontSize: "xx-large"
  },
  expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const useStylesModalFooter = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));

export default function EntityProduct(props) {

    const classesProduct = useStylesProduct();
    const classesProductModal = useStylesProductModal();
    const classesCardFooter = useStylesProductModal();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const { post } = props;

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState('None');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
        
            <Card className={classesProduct.root} onClick={handleOpen}>
                <div className={classesProduct.details}>
                    <CardContent className={classesProduct.content}>
                        <Typography className={classesProduct.title} component="h5" variant="h5">
                            {post.name}
                        </Typography>
                        <Typography className={classesProduct.description} variant="subtitle1" color="textSecondary">
                            {post.description}
                        </Typography>
                        <Typography className={classesProduct.price}>
                            {post.price}€
                        </Typography>
                    </CardContent>
                    <div className={classesProduct.controls}>
                    </div>
                </div>
                <CardMedia
                    className={classesProduct.cover}
                    image="https://s1.kuantokusta.pt/img_upload/produtos_saudebeleza/191713_3_ben-u-ron-500mg-20-comprimidos.jpg"
                    title={post.name}
                />
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classesProductModal.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <Card className={classesProductModal.root}>
                <CardMedia
                    className={classesProductModal.cover}
                    image={post.image}
                    title={post.title}
                />
                <div className={classesProductModal.details}>
                    <CardContent className={classesProductModal.content}>
                        <Typography className={classesProductModal.title} component="h5" variant="h5">
                            {post.title}
                        </Typography>
                        
                        <Card className={classesProductModal.details}>
                            
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Select Option 1
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>

                                <IconButton
                                    className={clsx(classesProductModal.expand, {
                                        [classesProductModal.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="sub1" control={<Radio />} label="Suboption 1" />
                                        <FormControlLabel value="sub2" control={<Radio />} label="Suboption 1" />
                                        <FormControlLabel value="sub3" control={<Radio />} label="Suboption 3" />
                                    </RadioGroup>
                                </FormControl>
                                    
                                </CardContent>
                            </Collapse>
                        </Card>

                    </CardContent>
                    <div id="yo" className={classesProductModal.controls}>
                    </div>
                </div>
                </Card>
            </Fade>
        </Modal>
        </div>
    );
}