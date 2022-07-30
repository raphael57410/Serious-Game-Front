import { InputBlock } from "../../components/input/InputBlock";
import { Input } from "../../components/input/Input";
import { Title } from "../../components/title";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import IconVisible from "../../assets/logo/inputPassword/eyePassword.svg";
import IconUnvisible from "../../assets/logo/inputPassword/eyePassword2.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import { URLS } from "../../_configs/URLS";
import { authStore, signUpCredentials } from "../../ressources/auth/AuthStore";

type Props = {};


export function PageRegister(props: Props) {
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            lastName: "",
            firstName: "",
            password: "",
            email: "",
            address: "",
            phone: "",
        },
    });
    const [iconVisible, setIconVisible] = useState(false);

    function onSubmit(data: signUpCredentials) {
        authStore.signUp(data).then(response => {
            console.log(response);
            reset({
                lastName: "",
                firstName: "",
                address: "",
                phone: "",
                email: "",
                password: "",
            });
        }).catch(err => {
            console.log(err);
        });
        reset({
            lastName: "",
            firstName: "",
            address: "",
            phone: "",
            email: "",
            password: "",
        });
    }

    return (
        <main className="h-full flex">
            <div className={"w-full h-screen flex flex-col-reverse items-center-center md:flex-row mt-0"}>
                <div className={"flex flex-col p-10 justify-center md:w-1/2"}>
                    <Title className={"lg:text-5xl"} text={"S'inscrire"} textCenter={false}/>
                    <form className={" flex flex-col"} onSubmit={handleSubmit(onSubmit)}>
                        <InputBlock className={"p-1"} label={"Nom"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "minimum 3 caractères",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "maximum 10 caractères",
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: "seulement les lettres sont accepté",
                                    },
                                }}
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.lastName}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Prénom"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    pattern: {
                                        value: /[A-Za-z]/,
                                        message: "seulement les lettres sont accepté",
                                    },
                                }}
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.firstName}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Adresse"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                }}
                                name="address"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.firstName}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Téléphone"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                }}
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.firstName}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Email"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    pattern: {
                                        value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i,
                                        message: "email invalide",
                                    },
                                }}
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="email"
                                        error={errors.email}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Mot de passe"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Le mot de passe doit contenir au minimum 8 caractères",
                                    },
                                }}
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type={iconVisible ? "text" : "password"}
                                        endIcon={iconVisible ?
                                            <img onClick={() => setIconVisible(!iconVisible)} src={IconVisible}/> :
                                            <img onClick={() => setIconVisible(!iconVisible)} src={IconUnvisible}/>}
                                        error={errors.password}
                                    />
                                )}
                            />
                        </InputBlock>
                        <Button name={"S'inscrire"} full={true} width={"w-full"} type={"submit"}/>
                        <p className={"text-center mt-2"}>vous avez deja un compte? <Link
                            className={"text-primaryColor font-bold"} to={URLS.auth.signIn()}>Se
                            connecter</Link></p>
                    </form>
                </div>
                <div
                    className={"text-center w-full h-full justify-end p-2 bg-textColor flex flex-col md:justify-center"}>
                    <Title size={"6xl"} textCenter={false} text={"Rejoignez l’aventure Metz Numeric School"} white/>
                    <Text
                        white
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        size={"2xl"}/>
                </div>
            </div>
        </main>
    );
}
