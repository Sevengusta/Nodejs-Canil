import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";


export const home = (req:Request ,res: Response) => {
    let list = Pet.getAll()

    res.render('pages/page', {
        banner: {
            title:'Todos os animais',
            background: 'allanimals.jpg'
        },
        menu: createMenuObject('all'),
        list
    });

}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        banner: {
            title:'Cachorros',
            background: 'banner_dog.jpg'
        },
        menu: createMenuObject('dog'),
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        banner: {
            title:'Gatos',
            background: 'banner_cat.jpg'
        },
        menu: createMenuObject('cat'),
        list

    });

}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
        banner: {
            title:'Peixes',
            background: 'banner_fish.jpg'
        },
        menu: createMenuObject('fish'),
        list
    });
}

