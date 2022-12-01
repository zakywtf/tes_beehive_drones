import {controller} from '../classes/classController.cjs';
import m from '../model/employeesModel.cjs'
import handleRequest from '../lib/ctrlHandler.cjs'

let model = new m()
let rtr = controller(model)

module.exports = rtr