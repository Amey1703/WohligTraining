import { Router } from "express";
import { members } from '../../Members.js';
import * as uuid from 'uuid';

const router = Router();
 
// Get all members
router.get('/', (req, res) =>{
    res.status(200).json({success: true, data:members});
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const user = members.filter(member => member.id === parseInt(req.params.id))
        res.status(200).json({success: true, message: 'Member Found', data:user})
    }else{
        res.status(400).json({success: false, error: `No member with the id of ${req.params.id}`})
    }
})

router.post('/',(req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: req.params.id % 2 === 0 ? 'active': 'inactive'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({success: false, error: 'Please include a name and email'})
    }

    members.push(newMember);
    res.status(201).json({success: true, data: members})
    // res.redirect('/')
});

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name? updateMember.name : member.name;
                member.email = updateMember.email? updateMember.email : member.email;
                member.status = updateMember.status? updateMember.status : member.status;

                res.status(200).json({success: true, message: "Member updated", data: member})
            }
        })
    }else{
        res.status(400).json({success: false, error: `No member with the id of ${req.params.id}`})
    }
})

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        const foundmember = members.filter(member => member.id !== parseInt(req.params.id))
        res.status(200).json({success: true, message: "Member deleted", data: foundmember})
    }else{
        res.status(400).json({success: false, error: `No member with the id of ${req.params.id}`})
    }
})
export default router;