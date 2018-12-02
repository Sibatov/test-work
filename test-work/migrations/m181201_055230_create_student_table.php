<?php

use yii\db\Migration;

/**
 * Handles the creation of table `student`.
 */
class m181201_055230_create_student_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('student', [
            'id' => $this->primaryKey(),
            'f_name'=>$this->text(),
            's_name'=>$this->text(),
            't_name'=>$this->text(),
            'id_group'=>$this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('student');
    }
}
