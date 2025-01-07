import e from "express";

const router = e.Router();

router.post('/', (req, res)=>{
    console.log(req.body)

    req.flash('success', 'test')

    res.redirect('/');

})

export default router;