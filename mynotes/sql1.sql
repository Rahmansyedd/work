create database mode;
use mode;
create table payment(
customer_id int primary key ,customer varchar(20), mode varchar(20),city varchar(20));

insert into payment(customer_id,customer,mode,city)
values
("101","rahul","netbanking","hyderabad");

select * from payment;
insert into payment(customer_id,customer,mode,city)
values
("102","rohan","creditcard","santoshnagar"),
("103","ramesh","creditcard","tarnaka"),
("104","syed","netbanking","lalapet"),
("105","rahman","creditcard","secunderabad"),uuuuu
("106","sai","debitcard","nizambad"),
("107","rajesh","debitcard","ramantapur"),
("108","manisha","netbanking","koti"),
("109","amit","netbanking","ecil"),
("110","afreen","creditcard","as rao nagar");

select mode ,count(customer_id)
from payment
group by mode
order by mode desc;

use college;
select city, count(rollno)
from student
where grade = "A"
group by city
having max(marks) > 90;
