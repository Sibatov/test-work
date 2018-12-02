<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;

class Student extends ActiveRecord
{

    public static function tableName()
    {
        return 'student';
    }

    public function rules()
    {
        return [
            [['f_name', 's_name', 't_name'], 'string'],
            [['f_name', 's_name', 't_name', 'id_group'], 'required'],
            [['id_group'], 'integer'],
            ['group', 'safe'],

        ];
    }

    public function attributeLabels()
    {
        return [
            'f_name' => 'Фамилия',
            's_name' => 'Имя',
            't_name' => 'Отчество',
            'id_group' => 'Номер группы',
        ];
    }

    public function getGroup(){
      //  return $this->hasMany(Group::classname(), ['id' => 'id_group']);

        return $this->hasOne(Group::className(), ['id'=>'id_group']);
    }


}
