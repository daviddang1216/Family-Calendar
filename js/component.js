component = {

}
component.registerPage = `
 <div class="register_container">
            <form id='register_form'>
                <div class="register_header">Family Calendar</div>
                <div class="name_wrapper">
                    <div class="input_wrapper">
                        <input type="text" placeholder="First Name" name="firstName">
                        <div class="error" id = "first_name_error"></div>
                    </div>
                    <div class="input_wrapper">
                        <input type="text" placeholder="Last Name" name="lastName">
                        <div class="error" id = "last_name_error"></div>
                    </div>
                </div>
                <div class="input_wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id = "email_error"></div>
                </div>
                <div class="input_wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div class="error" id = "password_error"></div>
                </div>
                <div class="input_wrapper">
                    <input type="password" placeholder="Password Confirm" name="passwordConfirm">
                    <div class="error" id = "password_confirmation_error"></div>
                </div>
                <div class="form_action">
                    <div>Already have an account ?<span class="cursor_pointer" id="login_change"> Log in </span></div>
                    <button class="btn cursor_pointer"> Register </button>
                </div>
            </form>
        </div>
`
component.loginPage = `
       <div class="login_container">
            <form id="login_form">
                <div class="login_header"> Family Calendar </div>
                <div class="input_wrapper">
                    <input type="text" placeholder="Email" name="email"> 
                    <div class="error" id= "login_email_error"></div>
                </div>
                <div class="input_wrapper">
                    <input type="password" placeholder="Password" name="password"> 
                    <div class="error" id= "password_email_error"></div>
                </div>
                <div class="form_action">
                    <div>Don't have any account ?<span class="cursor_pointer" id="register_change"> Register </span></div>
                    <button class="btn cursor_pointer"> Log in </button>
                </div>
            </form>
        </div>
`
component.calendarPage =`
<div class="timeline_container">
            <div class="header"> Family Calendar</div>
            <div class="main">
                <div class="aside_left">
                    <div class="create_event">
                        <button class="btn cursor_pointer"> <i class="fas fa-calendar-plus"></i> New event </button>
                    </div>
                    <div class="calendar">
                        <div class="month_navigation">
                            <div class="month">Tháng 9,2020</div>
                            <button class="cursor_pointer previous_month"> <i class="fas fa-chevron-left"></i></button>
                            <button class="cursor_pointer next_month"> <i class="fas fa-chevron-right"></i> </button>
                        </div>
                        <div class="days_wrapper">
                            <table>
                                <thead> 
                                    <tr>
                                        <th class="days_of_week">Sun </th>
                                        <th class="days_of_week">Mon </th>
                                        <th class="days_of_week">Tue </th>
                                        <th class="days_of_week">Wed </th>
                                        <th class="days_of_week">Thu </th>
                                        <th class="days_of_week">Fri </th>
                                        <th class="days_of_week">Sat </th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr> 
                                        <td class="days_of_week">  </td>
                                        <td class="days_of_week">  </td>
                                        <td class="days_of_week"> 1 </td>
                                        <td class="days_of_week"> 2 </td>
                                        <td class="days_of_week"> 3 </td>
                                        <td class="days_of_week"> 4 </td>
                                        <td class="days_of_week"> 5 </td>
                                    </tr>
                                    <tr> 
                                        <td class="days_of_week"> 6 </td>
                                        <td class="days_of_week"> 7 </td>
                                        <td class="days_of_week"> 8 </td>
                                        <td class="days_of_week"> 9 </td>
                                        <td class="days_of_week"> 10 </td>
                                        <td class="days_of_week"> 11 </td>
                                        <td class="days_of_week"> 12 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="room_container">
                        <div class="room_header"> My room
                            <button class="btn create_new_room cursor_pointer"> <i
                                    class="fas fa-folder-plus"></i></button>
                        </div>
                        <div class="list_rooms">
                            <div class="room cursor_pointer current">
                                <div class="room_title"> Our home </div>
                                <div class="num_of_user"> 4 users</div>
                            </div>
                            <div class="room cursor_pointer">
                                <div class="room_title"> My footbal team </div>
                                <div class="num_of_user"> 10 users</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline_detail">
                    <div class="user_navigation">
                        <div class="family_member cursor_pointer current"> Dad </div>
                        <div class="family_member cursor_pointer"> Mom </div>
                        <div class="family_member cursor_pointer"> Son </div>
                        <button class="btn add_user cursor_pointer "> <i class="fas fa-user-plus"></i></button>
                    </div>
                    <div class="date_navigation">
                        <button class="cursor_pointer previous_day"> <i class="fas fa-chevron-left"></i> </button>
                        <div class="date"> 23 tháng 9 năm 2020 </div>
                        <button class="cursor_pointer next_day"> <i class="fas fa-chevron-right"></i> </button>
                    </div>
                    <div class="family_list_timeline">
                        <div class="timeline_wrapper">
                            <div class="time"> 7AM </div>
                            <div class="content">Get up</div>
                        </div>
                        <div class="timeline_wrapper">
                            <div class="time"> 7.30AM </div>
                            <div class="content">Breakfast</div>
                        </div>
                        <div class="timeline_wrapper">
                            <div class="time"> 8AM </div>
                            <div class="content">Go to school</div>
                        </div>
                        <div class="timeline_wrapper">
                            <div class="time"> 12AM </div>
                            <div class="content">Go home</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`