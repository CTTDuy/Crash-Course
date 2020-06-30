<?php 
    
class Customer{
	public $id = 1;
	public $name;
	public $email;
	public $balance;

	public function getCustomer($id){
		$this->id = $id;
		return 'Tuan Duy';
	}
}

$customer = new Customer;

echo $customer->id;
?>