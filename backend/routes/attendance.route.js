import express from 'express'
import { AttendanceHistoryById, employeeClockIn, employeeClockOut } from '../controllers/attendance.controller.js';
import {isAuthenticatedEmployee} from '../middleware/isAuthenticated.js'

const router = express.Router();

router.route('/clockIn').post(isAuthenticatedEmployee, employeeClockIn)
router.route('/clockOut').post(isAuthenticatedEmployee, employeeClockOut)
router.route('/history').get(isAuthenticatedEmployee, AttendanceHistoryById)

export default router;