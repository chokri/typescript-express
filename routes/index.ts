import { Router, Request, Response } from 'express';


const router: Router = Router();


router.get('/', (_req: Request, res: Response) => {
    res.json({
        message: "Hellow"
    })
})

router.get('/about', (_req, res) => {
    res.json({
        message: "About"
    })
})

export const IndexRouter : Router = router