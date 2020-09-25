import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../redux/actions";
import { selectLoginData } from "../redux/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    Container,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Card,
    Button,
    List,
    ListItem,
    TextField
  } from '@material-ui/core';

  import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import hero6 from '../../../../assets/img/hero-1.jpg';
import img2 from '../../../../assets/img/login-register.jpg';
function Login(props: any) {
  const dispatch = useDispatch();
  const route = useHistory();
  const loginData = useSelector(selectLoginData);

  function handleSubmitLogin(e: any) {
    e.preventDefault();
    dispatch(loginAction("a", "a"));
  }

  useEffect(() => {
    loginData.username ? route.push('/dashboard') : route.push('/');
  }, [loginData])
  
  return (
    <div >
        <div className="app-wrapper min-vh-100 bg-white">
            <div className="hero-wrapper w-100 bg-composed-wrapper bg-midnight-bloom min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                className="bg-composed-wrapper--image opacity-6"
                style={{ backgroundImage: 'url(' + hero6 + ')' }}
                />
                </div>
                <div className="bg-composed-wrapper--bg bg-second opacity-7" />
                <div className="bg-composed-wrapper--content p-3 p-md-5">
                <Container>
                <Card className="rounded-sm modal-content p-3 bg-white-10">
                <Card className="rounded-sm overflow-hidden shadow-xxl font-size-sm p-3 p-sm-0">
                    <Grid container spacing={0}>
                      <Grid
                        item
                        lg={6}
                        className="d-flex align-items-center justify-content-center flex-column">
                        <div className="divider-v divider-v-lg d-none d-lg-block" />
                        <div className="text-center mt-4">
                          <h1 className="font-size-xxl mb-1 font-weight-bold">
                            Login
                          </h1>
                          <p className="mb-0 text-black-50">
                            Fill in the fields below to login to your account
                          </p>
                        </div>
                        <form onSubmit={handleSubmitLogin}  >
                        <div className="py-4">
                          <div className="text-center mb-5">
                          </div>
                          <div>
                            <div className="mb-4">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="standard-user"
                                label="Usuario"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailOutlineTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </div>
                            <div className="mb-3">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </div>
                            <div className="text-center py-4">
                              <Button type='submit' className="btn-second font-weight-bold w-50 my-2">
                                ENTRAR
                              </Button>
                            </div>
                          </div>
                        </div>
                        {loginData.username ? `Usuario ${loginData.username} logeado` : ""}
                        </form>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        className="d-flex align-items-center justify-content-center flex-column bg-secondary">
                        <div className="p-3">
                          <img src={img2} width='150%' height='100%' />
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Card>
                </Container>
                </div>

            </div>
        </div>
    </div>
  );
}
export default Login;
